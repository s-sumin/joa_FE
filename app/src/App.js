import React from 'react';
import './main/app.css'; 

function App() {
  return (
    <div className="container">
      {/* 시선 추적 */}
      
      <div className="card">
        <h2 className="title">시선 추적</h2>
        <div className="icon">
          <img src="/main/eye.png" alt="Sample" />
        </div>
        <p className="description">
          시선추적을 사용하시려면 <span className="link">여기</span>를 보고 깜빡여 주세요
        </p>
      </div>

      {/* 터치 모드 */}
      <div className="card">
      <h2 className="title">터치 모드</h2>
        <div className="icon">
          <img src="/main/tap.png" alt="Sample" />
        </div>
        
        <p className="description">
          터치모드를 이용하시려면 <span className="link">여기</span>를 클릭해 주세요
        </p>
      </div>
    </div>
  );
}

export default App;
