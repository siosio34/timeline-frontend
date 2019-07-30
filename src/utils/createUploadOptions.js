import axios from 'axios';
import { message } from 'antd';

const imageServerUrl = 'https://api-image.cloud.toast.com/image/v2.0/appkeys/nyXWlYDoYYEf6s19/images';
const createUploadOptions = ({ handlePreview, handleChange, basePath, operationIds, fileList }) => {
  return {
    action: imageServerUrl,
    onPreview: handlePreview,
    onChange: handleChange,
    headers: {
      Authorization: 'bMjzQRvR',
      'Content-type': '',
    },
    file: fileList,
    customRequest(options) {
      const { action, file, headers, onSuccess } = options;
      const formData = new FormData();
      formData.append('files', file);
      formData.append(
        'params',
        JSON.stringify({
          basepath: basePath,
          operationIds,
          autorename: true,
        }),
      );
      axios
        .post(action, formData, { headers })
        .then(({ data: response }) => {
          if (response.header.isSuccessful) {
            onSuccess(response, file);
          } else {
            throw response;
          }
        })
        .catch(() => {
          message.error('이미지 등록에 실패했습니다. 다시 시도해주세요.');
        });
    },
  }
};

export default createUploadOptions;