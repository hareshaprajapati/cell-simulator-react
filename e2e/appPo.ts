import { Selector, t } from "testcafe";

export const SelectByAttribute = (
  element: string,
  elementId: string
): Selector => {
  return Selector(element).withAttribute("data-testid", `${elementId}`);
};
export const fillGrid = async (cellIds: string[]) => {
  cellIds.forEach(async (cellId) => {
    const cell1 = SelectByAttribute("div", cellId);
    await t.click(cell1);
  });
};

export const generateNext = async () => {
  const nextGenBtn = SelectByAttribute("button", "nextGenBtn");
  await t.click(nextGenBtn);
};

export const validateGeneration = async (cellIds: string[]) => {
  for (let cellId of cellIds) {
    const cell1 = await SelectByAttribute("div", cellId);
    await t.expect(await cell1.hasClass("selected-column")).ok();
  }
};
