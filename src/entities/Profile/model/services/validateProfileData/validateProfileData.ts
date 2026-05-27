import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) return [ValidateProfileError.NO_DATA];

  const {
    firstName,
    lastName,
    age,
    username,
    avatar,
    city,
  } = profile;

  const regex = /^https?:\/\//mgi;

  const errors: ValidateProfileError[] = [];

  if (!firstName) {
    errors.push(ValidateProfileError.INCORRECT_FIRST_NAME);
  }

  if (!lastName) {
    errors.push(ValidateProfileError.INCORRECT_LAST_NAME);
  }

  if (!age || age > 120 || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!username || username.length < 3) {
    errors.push(ValidateProfileError.INCORRECT_USERNAME);
  }

  if (!avatar || !regex.test(avatar)) {
    errors.push(ValidateProfileError.INCORRECT_AVATAR);
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }

  return errors;
};
