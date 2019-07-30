import React from 'react';
import './IntroPage.css';
import './HeartIcon.css';

const IntroPage = () => {
  return (
    <div className="intro-page">
      <div className="ant-row" style={{ height: '100%'}}>
        <div className="intro-description ant-col ant-col-12">
          <div className="intro-kor">
            타임라인에서 <br />
            지인들과 <strong>친구</strong>를 맺고 <br />
            즐거운 <strong>소식</strong>과 <strong>사진</strong>을 <br />
            공유해보세요
          </div>
          <div className="intro-eng">
            find your friends <br />
            share <strong>posts</strong> and <strong>photo</strong> <br />
            enjoy timeline <br />
          </div>
        </div>
        <div className="intro-title ant-col ant-col-12">
          <div className="lds-heart">
            <div />
          </div>
          <h2 className="intro-app-title">TIME<strong>LINE</strong></h2>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
