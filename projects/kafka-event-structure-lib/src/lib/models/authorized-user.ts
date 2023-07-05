export class AuthorizedUser {
  createdAt : Date;
  createdBy : string;
  id : number;
  updatedAt : Date;
  updatedBy : string;
  idCard : string;
  username : string;
  firstname : string;
  lastname : string;
  email : string;
  phone : string;
  locale : string;
  passwordModifiedDate : Date;
  accountLocked : boolean;
  accountBlocked : boolean;
  enabled : boolean;
  grantedAuthorities : string[];
  fullName : string;
  uniqueName : string;
  accountNonExpired : boolean;
  credentialsNonExpired : boolean;
  emailAddress : string;
  accountNonLocked : boolean;
  uniqueId : number;
  uid : string;
  mobilePhone : string;
  lastName : string;
  firstName : string;
  languageId : string;

  public static clone(from: AuthorizedUser): AuthorizedUser {
    const to: AuthorizedUser = new AuthorizedUser();
    AuthorizedUser.copy(from, to);
    return to;
  }

  public static copy(from: AuthorizedUser, to: AuthorizedUser): void {
    to.createdAt = from.createdAt ? new Date(from.createdAt) : null;
    to.createdBy = from.createdBy;
    to.id = from.id;
    to.updatedAt = from.updatedAt ? new Date(from.updatedAt) : null;
    to.updatedBy = from.updatedBy;
    to.idCard = from.idCard;
    to.username = from.username;
    to.firstname = from.firstname;
    to.lastname = from.lastname;
    to.email = from.email;
    to.phone = from.phone;
    to.locale = from.locale;
    to.passwordModifiedDate = from.passwordModifiedDate ? new Date(from.passwordModifiedDate) : null;
    to.accountLocked = from.accountLocked;
    to.accountBlocked = from.accountBlocked;
    to.enabled = from.enabled;
    to.grantedAuthorities = from.grantedAuthorities;
    to.fullName = from.fullName;
    to.uniqueName = from.uniqueName;
    to.accountNonExpired = from.accountNonExpired;
    to.credentialsNonExpired = from.credentialsNonExpired;
    to.emailAddress = from.emailAddress;
    to.accountNonLocked = from.accountNonLocked;
    to.uniqueId = from.uniqueId;
    to.uid = from.uid;
    to.mobilePhone = from.mobilePhone;
    to.lastName = from.lastName;
    to.firstName = from.firstName;
    to.languageId = from.languageId;
  }
}
