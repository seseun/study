/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", () => {
	render(<Page params={{ slug: "Test" }} />);
	expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});
// 동적 경로 처리 검증: Page 컴포넌트가 동적 경로(params.slug)를 사용하여 올바른 내용을 렌더링하는지 확인합니다. 이는 컴포넌트가 동적 URL 매개변수를 처리하는 방법을 검증합니다.

// 기능 확인: 테스트는 Page 컴포넌트가 기대한 대로 동작하는지 확인하여, 코드 변경이 기능을 손상시키지 않았는지 확인하는 데 도움을 줍니다.
