# REST API 명세

|METHOD|URI|Params|Body|Description|
|:---:|:---:|:---:|:---:|:---:|
|GET|/users|||전체 사용자 조회|
|GET|/users/{id}|||사용자의 ID를 이용해서 특정 사용자 조회|
|PUT|/users/{id}||age, role|특정한 ID를 가진 사용자의 정보를 body에 전달한 age와 role에 따라서 업데이트
|DELETE|/users/{id}|||특정한 ID를 가진 사용자의 회원 탈퇴|