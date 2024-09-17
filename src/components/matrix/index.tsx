import type { Matrix } from "@/types/Matrix";

import { Cell } from "./cell";

type Props = {
  values: Matrix;
};

export function Matrix({ values }: Props) {
  return (
    <table className="matrix">
      <tbody>
        <tr>
          <td></td>
          <td>
            Classic
            <br />
            Model
          </td>
          <td>
            Platform
            <br />
            Model
          </td>
          <td>
            Post
            <br />
            Digital
          </td>
        </tr>
        <tr>
          <td>
            Non
            <br />
            Digital
          </td>
          <Cell value={values[0][0]} />
          <Cell value={values[0][1]} />
          <Cell value={values[0][2]} />
        </tr>
        <tr>
          <td>
            Digitally
            <br />
            Translated
          </td>
          <Cell value={values[1][0]} />
          <Cell value={values[1][1]} />
          <Cell value={values[1][2]} />
        </tr>
        <tr>
          <td>
            Digitally
            <br />
            Designed
          </td>
          <Cell value={values[2][0]} />
          <Cell value={values[2][1]} />
          <Cell value={values[2][2]} />
        </tr>
      </tbody>
    </table>
  );
}
