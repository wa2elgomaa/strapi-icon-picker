// import { useRBAC } from '@strapi/strapi/admin';
import { useAuth } from '@strapi/strapi/admin';


const perms = { read: [{ action: 'plugin::strapi-icon-picker.read', subject: null }] };

interface IUserPermissions {
  loading: boolean;
  canCreate: boolean;
  canRead: boolean;
  canUpdate: boolean;
  canDelete: boolean;
  canPublish: boolean;
}

function usePermissions() {
  const permissions = useAuth('strapi-icon-picker', (state) => state.permissions);
  // const refetchPermission = useAuth(
  //   'COMPONENT_NAME',
  //   (state) => state.refetchPermission
  // );


  console.log("permissions -->" , permissions)
  // console.log("strapi-icon-picker -->", permissions)
  // const { allowedActions, isLoading: loading } = useRBAC(perms);
  return permissions;
}

export default usePermissions;
