import { RouteObject } from "react-router-dom";
import { PATHS } from "../consts/paths";

// Pages
import { ConfigureContractPage } from "../pages/ConfigureContractPage.tsx";
import { AboutPage } from "../pages/AboutPage.tsx";
import { QuestsCollectionViewPage } from "../pages/QuestsCollectionViewPage.tsx";
import { QuestsCollectionCreatePage } from '../pages/QuestsCollectionCreatePage';
import { QuestsCollectionManagePage } from "../pages/QuestsCollectionManagePage.tsx";
import { IndexPage } from "../pages/IndexPage.tsx";

export const general: RouteObject[] = [
  // ROUTES - START
  {
    path: PATHS.configureContract,
    element: <ConfigureContractPage />
  },
  {
    path: PATHS.about,
    element: <AboutPage />,
  },
  {
    path: PATHS.index,
    element: <IndexPage />,
  },
  {
    path: PATHS.questsCollectionView,
    element: <QuestsCollectionViewPage />,
  },
  {
    path: PATHS.questsCollectionCreate,
    element: <QuestsCollectionCreatePage />,
  },
  {
    path: PATHS.questsCollectionManage,
    element: <QuestsCollectionManagePage />,
  }
  // ROUTES - END
];
