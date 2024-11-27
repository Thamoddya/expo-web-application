export enum APIEndpoint {
  // Default
  Alive = '/api/alive', // GET
  UploadImage = '/api/upload', //POST

  // Auth
  Login = '/api/auth/token', // POST
  Register = '/api/auth/register', // POST
  OtpVerify = '/api/auth/verify-otp', // POST
  ResendOtp = '/api/auth/resend-otp', // POST

  // User
  UserDetails = '/api/user', // GET
  ChangePassword = '/api/user/change-password', // POST
  ChangeRole = '/api/user/change-role', //POST
  UpdateUserDetails = '/api/user/update', //PUT
  GetUserByID = '/api/user/profile/', //GET
  DeleteJob = '/api/job/', //DELETE
  GetAllCategories = '/api/categories', //GET
  GetCategoryDetails = '/api/categories/', //GET
  GetSubCategoryDetails = '/api/categories/sub-category/', //GET

  // GetPostedJobs = '/api/poster/posted-jobs', //GET
  GetPostedJobs = '/api/poster/jobs', //GET
  UpdateAvatar = '/api/user/update-avatar', //PATCH
  UpdateCoverPhoto = '/api/user/update-cover-photo', //PATCH
  GetOfferDataByID = '/api/offers/', //GET
  userLanguages = '/api/user/language', //GET //POST
  GetDirectOfferByID = '/api/offers/direct-offer/', //GET

  //Poster
  StorePosterAddress = '/api/poster/address', //POST
  GetPosterAddress = '/api/poster/address', //POST
  PosterJobCount = '/api/poster/job-count', //GET
  GetTopCategories = '/api/poster/populer-cat', //GET
  GetTaskersForCategory = '/api/poster/taskers?categoryID=', //GET
  GetAdsForCategory = '/api/poster/listings', //GET
  DeletePosterAddress = '/api/poster/address/', //DELETE
  ReceivedOffers = '/api/offers/fetch-direct-offers', //POST
  AcceptDirectOfferByID = '/api/offers/accept-direct-offer/', //POST
  RejectDirectOfferByID = '/api/offers/reject-direct-offer/', //POST

  //Tasker
  taskHomeData = '/api/tasker/home', //GET
  AddTaskerCategory = '/api/tasker/category', //POST
  GetTaskerAddresses = '/api/tasker/address', //GET
  StoreTaskerAddress = '/api/tasker/address', //POST
  GetTaskerCategories = '/api/tasker/category', //GET
  GetOffersByID = '/api/offers?jobId=', //GET
  CreateOffer = '/api/offers/create-offer', //POST
  GetOfferByOfferID = '/api/offers/', //GET
  AcceptOffer = '/api/offers/accept/', //POST
  getAllCategories = '/api/categories', //GET
  PublishNewJob = '/api/job/create-job', //POST
  GetJobByID = '/api/job/', //GET
  GetAllJobs = '/api/job/', //GET
  addBusinessDetails = '/api/tasker/create-business', //POST
  UpdateVerification = '/api/tasker/verification-document', //POST
  getVerificationDocument = '/api/tasker/verification-document', //GET
  GetAllOffersForEachTasker = '/api/offers/offers', //GET
  VerificationStatus = '/api/tasker/verify-status', //GET
  VerifiedDetailsGet = '/api/tasker/status-check', //GET
  DeleteOffer = '/api/offers/', //DELETE
  DeleteTaskerCategory = '/api/tasker/category/', //DELETE
  DeleteTaskerAddress = '/api/tasker/address/', //DELETE
  GetBankAccount = '/api/tasker/bank-account', //GET
  UpdateBankAccount = '/api/tasker/bank-account/', //PUT
  DeleteTaskerBankAccount = '/api/tasker/bank-account/', //DELETE
  AddBankAccount = '/api/tasker/bank-account', //POST
  ChangeTaskerWorkStatus = '/api/tasker/switch-online-status', //POST
  CheckOnlineStatus = '/api/tasker/online-status', //GET
  GetTemportTaskerAddress = '/api/tasker/temp-address', //GET
  DeleteTempAddressByID = '/api/tasker/temp-address/', //DELETE
  SendDirectOffer = '/api/offers/direct-offer?receiverId=', //POST
  GetAllSendedDirectOffers = '/api/offers/sended-direct-offers', //POST

  AddListing = '/api/listing/add-listing', //POST
  GetListingForTasker = '/api/listing/', //GET
  DeleteListingByID = '/api/listing/', //DELETE
  GetListingByID = '/api/listing/listing/', //GET
  UpdateListingByID = '/api/listing/update-listing/', //PUT
  SearchListings = '/api/listing/search', //POST
  ChangeListingStatus = '/api/listing/change-status?id=', // POST

  UpdateListingDetails = '/api/listing/update-listing-1/', //PATCH
  UpdateListingDetails2 = '/api/listing/update-listing-2/', //PATCH
  UpdateListingDetails3 = '/api/listing/update-listing-3/', //PATCH

  userEducation = '/api/user/education', //GET //POST
  userSkills = '/api/user/skills', //GET //POST
  userWorkExperience = '/api/user/work-experiance', //GET //POST
  userInterests = '/api/user/interests', //GET //POST

  AddComment = '/api/job/discussion?id=', //POST
  AddReply = '/api/job/discussion-reply/', //POST

  GetChatUsers = '/api/user/chat/profiles?', //GET
  GetUserByEmail = '/api/auth/google-reg', //GET

  CheckBadgeVerificationStatus = '/api/tasker/verification-status', //GET
  AddIdVerificationDocuments = '/api/tasker/id-verification', //POST
  AddPoliceVerificationDocuments = '/api/tasker/police-certificate', //POST

  //Payment
  PaymentIntent = '/api/payment-intent', //POST
}
