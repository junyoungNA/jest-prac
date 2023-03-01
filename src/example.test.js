describe("expect test", () => {
  // it("37 to equal 37", () => {
  //   expect(37).toBe(37);
  // });

  // it("{age:39} to equal {age:39}", () => {
  //   expect({ age: 39 }).toEqual({ age: 39 });
  // });

  //문자열 길이 확인
  // it("toHaveLength", () => {
  //   expect("hello").toHaveLength(5);
  // });
  //객체의 프로퍼티값 확인
  // it("toHaveProperty", () => {
  //   expect({ name: "mark" }).toHaveProperty("name");
  //   expect({ name: "mark" }).toHaveProperty("name", "mark");
  // });

  // it("toBeDefined", () => {
  //   expect({ name: "mark" }.name).toBeDefined();
  // });

  // it("toBeFalsy", () => {
  //   expect("rqwe").toBeFalsy();
  // });

  // it("toBeGreaterThan", () => {
  //   //값이 더 큰지 확인
  //   expect(10).toBeGreaterThan(9);
  // });

  // it("toBeGreaterThanOrEqual", () => {
  //   //값이 더 큰지 혹은 같은지
  //   expect(10).toBeGreaterThan(9);
  // });

  it("toBeInstanceOf", () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo);
  });
});
