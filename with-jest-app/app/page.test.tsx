/**
 * @jest-environment jsdom
 */
// 💛Jest에게 이 테스트 파일이 jsdom 환경에서 실행되어야 한다는 것을 알려줍니다.

import { render, screen } from "@testing-library/react";
import Page from "./page";
// 💚render
// React 컴포넌트를 가상 DOM에 렌더링하여 테스트할 수 있게 해주는 함수입니다.
// 💚screen
// DOM에 렌더링된 요소를 쿼리할 수 있는 유틸리티 객체입니다. 이는 테스트의 가독성을 높이고, DOM 요소를 쉽게 찾을 수 있게 합니다.

it("App Router: Works with Server Components", () => {
	// 💛it: Jest의 전역 함수로, 개별 테스트 케이스를 정의할 때 사용합니다. 이 함수는 첫 번째 인수로 테스트의 설명(테스트 명세), 두 번째 인수로 테스트 함수(실제 테스트가 수행되는 코드)를 받습니다.
	render(<Page />);
	// 💚render: Page 컴포넌트를 렌더링합니다. 이 컴포넌트는 가상의 DOM에 렌더링되며, 이를 통해 DOM 조작 및 쿼리를 수행할 수 있습니다.
	expect(screen.getByRole("heading"))
		// 💛expect
		// 💚screen.getByRole("heading"): 가상 DOM에서 role이 "heading"인 요소(헤딩 요소, 예: <h1>, <h2> 등)를 찾습니다.
		.toHaveTextContent("App Router");
	// testing library의 jest-dom. 찾은 요소가 "App Router"라는 텍스트 콘텐츠를 가지고 있는지 확인합니다.
	// https://github.com/testing-library/jest-dom
});

// app/blog/[slug]/page.test.tsx 여기까지 봤음
