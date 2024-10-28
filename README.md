## 유레카! 

### 💡 useSelectedLayoutSegment로 active한 메뉴바 만들기

NavMenu에서 버튼 별로 다른 url을 구현할때, useSelectedLayoutSegment를 사용하여 현재 segment에 대한 값을 받아와서 각 값 별로 다른 스타일을 쉽게 적용할 수 있다 <br />

**Code Snippet**

```javascript
const segment = useSelectedLayoutSegment();

{
  segment === "home" ? (
    <>
      home 입니다.
    </>
  ) : (
    <>
      home이 아닙니다.
    </>
  );
}
```

### 💡 dayjs로 날짜/시간 포맷팅이랑 상대적 시간 계산 쉽게 가능
dayjs는 moment와 기능이 95% 유사한데 번들 크기가 가볍다. dayjs 라이브리러를 이용해서 날짜,시간 관련 여러 기능을 쉽게 이용할 수 있다. <br />

**Code Snippet**
```javascript
dayjs.locale('ko');
dayjs.extend(relativeTime);

<span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
```

### 💡 classnames로 CSS 클래스 이름 동적으로 적용
 조건에 따라 클래스를 추가/제거하거나 여러 클래스 이름을 간단하게 조합할때 유용하다. <br />

**Code Snippet**
```javascript
<div className={cx(style.commentButton, { [style.commented]: commented })}>
<div className={cx(style.repostButton, reposted && style.reposted)}>
```

### 💡 라이브러리 고를때 npm trends 활용하기
[npm trends](https://npmtrends.com/)에서 라이브러리 트랜드와 경쟁 상대까지 볼 수 있다. npm trends도 같이 고려하여 적절한 라이브러리를 고르자. 