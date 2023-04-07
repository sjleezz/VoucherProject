import { setupServer } from "msw/node";
import { handlers } from "./handlers";
import { evaluateHandlers } from "./evaluateHandlers";
import { chaptersHandlers } from "./chaptersHandlers";
import { sentencesHandlers } from "./sentencesHandlers";
import { accountsHandlers } from "./accountsHandler";
import { passwordsHandlers } from "./passwordsHandler";
import { vproHandlers } from "./vproHandlers";
import { gproHandlers } from "./gproHandlers";
import { loginHandlers } from "./loginHandlers";

export const server = setupServer(
  ...handlers,
  ...chaptersHandlers,
  ...sentencesHandlers,
  ...evaluateHandlers,
  ...accountsHandlers,
  ...passwordsHandlers,
  ...vproHandlers,
  ...gproHandlers,
  ...loginHandlers
);
