import { RouteObject } from "react-router-dom";
import { PATHS } from "../consts/paths";

// Pages
import { DeployPage } from "../pages/DeployPage.tsx";
import { ConfigureContractPage } from "../pages/ConfigureContractPage.tsx";
import { IndexPage } from "../pages/Index";
import { AppIndexPage } from "../pages/app/Index";
import { QuestsCollectionViewPage } from "../pages/QuestsCollectionViewPage.tsx";
import { QuestsCollectionCreatePage } from '../pages/QuestsCollectionCreatePage';

export const general: RouteObject[] = [
  // ROUTES - START
  {
    path: PATHS.deploy,
    element: <DeployPage />
  },
  {
    path: PATHS.configureContract,
    element: <ConfigureContractPage />
  },
  {
    path: PATHS.index,
    element: <IndexPage />,
  },
  {
    path: PATHS.app,
    element: <AppIndexPage />,
  },
  {
    path: PATHS.questsCollectionView,
    element: <QuestsCollectionViewPage />,
  },
  {
    path: PATHS.questsCollectionCreate,
    element: <QuestsCollectionCreatePage />,
  }
  // ROUTES - END
];
