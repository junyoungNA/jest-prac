/* eslint-disable no-undef */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, act } from "@testing-library/react";
import ButtonComponents from "./ButtonComponents";

describe("Button 컴포넌트(@testing-library/react)", () => {
  it("컴포넌트가 정삭적으로 생성된다.", () => {
    const testButton = render(<ButtonComponents />);
    expect(testButton).not.toBe(null);
  });
  it("button 이라고 쓰여있는 엘리먼트는 HTMLButtonElement 이다.", () => {
    const { getByText } = render(<ButtonComponents />);
    const buttonElement = getByText("button");
    expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
  });
  it("버튼을 클릭하면  p 태그 안에 '버튼이 방금 눌렸다.' 라고  쓰여진다.", () => {
    const { getByText } = render(<ButtonComponents />);
    const buttonElement = getByText("button");
    fireEvent.click(buttonElement);
    const p = getByText("버튼이 방금 눌렸다.");
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it("버튼을 클릭하기 전에는. p태그 안에 '버튼이 눌리지 않았다.' 라고 쓰여진다.", () => {
    const { getByText } = render(<ButtonComponents />);
    const p = getByText("버튼이 눌리지 않았다.");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it("버튼을 클릭하고 5초 뒤에는, p 태그 안에 '버튼이 눌리지 않았다.' 라고 쓰여진다.", () => {
    jest.useFakeTimers();

    const { getByText } = render(<ButtonComponents />);
    const buttonElement = getByText("button");

    fireEvent.click(buttonElement);

    //5초 흐른다.
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const p = getByText("버튼이 눌리지 않았다.");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it("버튼을 클릭하면, 5초 동안 버튼이 비활성화 된다.", () => {
    jest.useFakeTimers();

    const { getByText } = render(<ButtonComponents />);
    const buttonElement = getByText("button");

    fireEvent.click(buttonElement);

    //비활성화
    expect(buttonElement).toBeDisabled(); //disabled 처리확인
    //5초 흐른다.
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    //활성화
    expect(buttonElement).not.toBeDisabled(); //disabled 처리확인
    const p = getByText("버튼이 눌리지 않았다.");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });
});
