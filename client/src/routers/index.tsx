import { Route, Routes } from 'react-router-dom';
import { ROUTER } from '../enums/router';
import NotFoundPage from '../pages/notFoundPage';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import ForgotPasswordPage from '../pages/forgotPassword';
import AdminLayout from '../layouts/admin/AdminLayout';
import AdminDashboard from '../pages/admins/dashboard';
import ClientLayout from '../layouts/client/ClientLayout';
import HomePage from '../pages/clients/homepage';

const arrRoutes = [
  { path: ROUTER.LOGIN, element: <LoginPage /> },
  { path: ROUTER.REGISTER, element: <RegisterPage /> },
  { path: ROUTER.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
  {
    path: ROUTER.ADMIN_LOGIN,
    element: <LoginPage isAdmin={true} />,
  },
  {
    path: ROUTER.ADMIN_FORGOT_PASSWORD,
    element: <ForgotPasswordPage isAdmin={true} />,
  },
  {
    path: ROUTER.ADMIN,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      // {
      //   path: ROUTER.ADMIN_SUBJECT,
      //   element: <AdminSubject />,
      // },
      // {
      //   path: ROUTER.ADMIN_TEACHER,
      //   element: <AdminTeacher />,
      // },
      // {
      //   path: ROUTER.ADMIN_DISCIPLINE,
      //   element: <AdminDiscipline />,
      // },
      // {
      //   path: ROUTER.ADMIN_EXAM,
      //   element: <AdminExam />,
      // },
      // {
      //   path: ROUTER.ADMIN_EXAM_KIT,
      //   element: <AdminExamKit />,
      // },
      // {
      //   path: ROUTER.ADMIN_ADMINISTRATION,
      //   element: <Administration />,
      // },
      // {
      //   path: ROUTER.ADMIN_DOCUMENT,
      //   element: <AdminDocument />,
      // },
    ],
  },
  {
    path: ROUTER.HOMEPAGE,
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {
      //   path: ROUTER.EXAM_PAGE,
      //   element: <ExamPage />,
      // },
      // {
      //   path: ROUTER.EXAM_DETAIL_PAGE,
      //   element: <ExamDetail />,
      // },
      // {
      //   path: ROUTER.NEW_PAGE,
      //   element: <NewPage />,
      // },
      // {
      //   path: ROUTER.DOCUMENT_PAGE,
      //   element: <Documentpage />,
      // },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
];

export const MainRouter = () => {
  const renderRoutes = (arrRoutes: any) => {
    return arrRoutes.map((item: any, index: number) => {
      const { path, element } = item;
      return (
        <Route key={index} path={path} element={element}>
          {item?.children?.map((it: any, id: number) => {
            return <Route key={`child-router-${id}`} {...it} />;
          }) || <></>}
        </Route>
      );
    });
  };

  return <Routes>{renderRoutes(arrRoutes)}</Routes>;
};
