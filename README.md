# joa_FE

# git 쓰는법 (간략하게)
초기설정.
터미널에서 `git clone https://github.com/joa-wemeet/joa_FE.git` 하면 명령을 실행한 경로 아래에 joa_FE라는 폴더가 생길겁니다.
이후 git add, clone, push는 joa_FE에서 해야해요.
ex. `PS C:\Dev\wemeet_fe\joa_FE>` 

두번째 이후.
1. 코드를 수정하기 전에 다른 사람이 코드를 먼저 수정했을 수도 있어요.
꼭 아래 명령으로 변경된 코드를 불러와주세요.
`git pull origin main`

2. (코드 수정 후)
어쩌구\joa_FE 경로에서 아래 명령어들을 실행하면 github 저장소로 업로드 될거에요.
그리고 코드 수정 전. 수정 후 꼭 카톡에 작업 시작했다고 팀원들에게 알려주세요. 
코드 꼬이면 지옥...
보통 브랜치를 다르게 사용하고 pr 이후 머지하지만 우리는 깃을 잘 모르기 때문에 main 브랜치만 사용할거에요.
`git add .`
`git commit -m "<어떤걸 수정했는지 대략적으로 설명해주세요>"`
`git push origin main`

# 파일 관리
전역적으로 사용되는 파일들(ex. 폰트, 배경 이미지 등등...)만 최상위 경로에 위치 시키고 다른것들은 모두 폴더로 만들어서 관리해요.
이미지, 동영상은 public 폴더에서.(동적인 이미지는 assets 아래에 위치시키는게 맞지만 그런건 생각하지 말자고요 ㅎ)
js, css파일은 src 폴더에서.

ex
* public
  - main/
    - eye.png
  - joomin(주민등록본)/
    - ~~~.png
  - background.png

\+ public 아래 이미지 사용할때는 public 뒤부터 절대경로로 입력!
ex. <img src="/main/eye.png" alt="Sample" />

ex
* src
  - App.js (main만 App.js)
  - index.css
  - main
    - app.css
  - joomin/
    - app.js
    - app.css 



# 의존성 관리
(터미널에서 import ~~~ 한거 아래 적어주기.)
import ~~~

# 유지보수 팁
.js 코드에는 js 코드만 넣고 css는 .css 파일에 저장하는게 나중에 gpt 돌리기 수월할겁니다.
js파일에서는 import로 css 파일을 불러와야 사용할 수 있어요

ex.
```
import './index.css';                  #<-이런 식으로. (index.css는 안불러와도 돼요!!)
import React from 'react';
...
```