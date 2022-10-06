# REST API 명세

|METHOD|URI|Params|Body|Description|
|:---:|:---:|:---:|:---:|:---:|
|GET|/users|||전체 사용자 조회|
|POST|/users||id, name, age, role|사용자 추가|
|GET|/users/{id}|id||사용자의 ID를 이용해서 특정 사용자 조회|
|PUT|/users/{id}|id|age, role|특정한 ID를 가진 사용자의 정보를 body에 전달한 age와 role에 따라서 업데이트
|DELETE|/users/{id}|id||특정한 ID를 가진 사용자의 회원 탈퇴|