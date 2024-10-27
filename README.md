## 유레카!

### useSelectedLayoutSegment로 active한 메뉴바 만들기

NavMenu에서 버튼 별로 다른 url을 구현할때, useSelectedLayoutSegment를 사용하여 현재 segment에 대한 값을 받아와서 각 값 별로 다른 스타일을 쉽게 적용할 수 있다.
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
