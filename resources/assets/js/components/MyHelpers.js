export function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export function addValidateJSONStringToYup(Yup){
  Yup.addMethod(Yup.string, "validateJSONString", function (errorMessage) {
    return this.test(`test-card-type`, errorMessage, function (value) {
      const { path, createError } = this;

      if(value === undefined) return true;

      return (
        isJsonString(value) ||
        createError({ path, message: errorMessage })
      );
    });
  });
}