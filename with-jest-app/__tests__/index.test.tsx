/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "@/pages/home/index";

describe("Home", () => {
	// describe: Jest에서 테스트 스위트를 그룹화할 때 사용되는 함수입니다. 이 블록 내의 모든 테스트 케이스들은 "Home"이라는 주제로 그룹화됩니다.
	// 테스트 그룹화를 통해 논리적으로 관련된 테스트를 하나의 그룹으로 묶어 가독성을 높이고, 테스트 출력 결과를 더 명확하게 할 수 있습니다.
	it("renders a heading", () => {
		render(<Home />);

		const heading = screen.getByRole("heading", {
			name: /welcome to next\.js!/i,
			// name 옵션은 특정 역할을 가진 요소 중에서 접근성 이름이 일치하는 요소를 찾는 데 사용됩니다.
		});

		expect(heading).toBeInTheDocument();
		// 해당 요소가 DOM에 존재하는지를 확인합니다.
	});
});
