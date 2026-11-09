import { Array as Arr, Record as Rec, pipe } from "effect";
import { requiredStack } from "oxlint-masseater-plugin";
import type { RcFile } from "syncpack";

const config: RcFile = {
  versionGroups: pipe(
    Rec.toEntries(requiredStack),
    Arr.map(([label, dependencies]) => ({
      label,
      dependencies: [...dependencies],
      isBanned: true,
    })),
  ),
};

export default config;
