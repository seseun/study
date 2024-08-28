/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Home from "@/pages/home/index";

it("renders homepage unchanged", () => {
	const { container } = render(<Home />);
	// 여기서 container는 렌더링된 DOM 트리의 루트 요소입니다.

	expect(container).toMatchSnapshot();
	// Jest의 matcher 중 하나로, 주어진 값(container)을 스냅샷 파일과 비교합니다.
	// 이 matcher는 현재 렌더링된 container의 HTML 구조를 스냅샷 파일과 비교하고, 만약 차이가 있다면 테스트가 실패하게 됩니다.
	// 처음 실행할 때는 Jest가 __snapshots__ 디렉토리에 스냅샷 파일을 생성하고, 이후 실행될 때마다 현재 렌더링 결과와 저장된 스냅샷을 비교합니다.
	// 만약 컴포넌트의 구조가 변경되었다면(예: 새로운 요소가 추가되거나 기존 요소가 제거되는 등), Jest는 이를 감지하고 테스트가 실패했다고 표시합니다. 이 경우 스냅샷을 업데이트할지, 코드 변경을 수정할지 결정해야 합니다.
});
