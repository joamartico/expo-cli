export type ErrorCode =
  // Auth Errors
  | 'INVALID_USERNAME_PASSWORD'
  | 'TOO_MANY_ATTEMPTS'
  | 'REGISTRATION_ERROR'
  | 'LEGACY_ACCOUNT_ERROR'
  | 'ROBOT_ACCOUNT_ERROR'
  | 'USER_ACCOUNT_ERROR'
  | 'DIRECTORY_ALREADY_EXISTS'
  | 'HOOK_INITIALIZATION_ERROR'
  | 'INVALID_ARGUMENT'
  | 'INVALID_ASSETS'
  | 'INVALID_BUNDLE'
  | 'INVALID_JSON'
  | 'INVALID_MANIFEST'
  | 'INVALID_OPTIONS'
  | 'INVALID_VERSION'
  | 'NGROK_ERROR'
  | 'NO_EXPO_SERVER_PORT'
  | 'NO_PACKAGE_JSON'
  | 'NO_PACKAGER_PORT'
  | 'NO_PORT_FOUND'
  | 'NO_PROJECT_ROOT'
  | 'NO_SDK_VERSION'
  | 'NOT_LOGGED_IN'
  | 'PLATFORM_NOT_SUPPORTED'
  | 'PUBLISH_VALIDATION_ERROR'
  | 'WONT_OVERWRITE_WITHOUT_FORCE'
  | 'XCODE_LICENSE_NOT_ACCEPTED'
  | 'SIMCTL_NOT_AVAILABLE'
  | 'WEB_NOT_CONFIGURED'
  | 'WEBPACK_DEPRECATED'
  | 'WEBPACK_INVALID_OPTION'
  | 'NETWORK_REQUIRED'
  // Shell Apps
  | 'CREDENTIAL_ERROR'
  // Dev Client
  | 'NO_DEV_CLIENT_SCHEME';
