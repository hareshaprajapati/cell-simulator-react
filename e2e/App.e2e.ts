import { waitForReact } from "testcafe-react-selectors";
import * as appPo from "./appPo";

fixture("Cell Simulator E2E").page`http://localhost:3000/`.beforeEach(
  async () => {
    await waitForReact();
  }
);

test("Successful next generation of cells ", async (t) => {
  const cellIds = ["cell-1-2", "cell-2-3", "cell-3-3", "cell-3-2", "cell-3-1"];
  await appPo.fillGrid(cellIds);
  await appPo.generateNext();
  const nextGenCellIds = [
    "cell-2-1",
    "cell-2-3",
    "cell-3-2",
    "cell-3-3",
    "cell-4-2",
  ];
  await appPo.validateGeneration(nextGenCellIds);
  //   below cell should not be selected
  const cell1 = await appPo.SelectByAttribute("div", "cell-4-5");
  await t.expect(await cell1.hasClass("selected-column")).notOk();
});
