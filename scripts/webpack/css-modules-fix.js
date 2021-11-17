// https://github.com/snowpackjs/snowpack/issues/3243#issuecomment-854472971
module.exports = function cssModulesFix(source) {
  return source.replace(/_(\w+)_[\w\d]{5}_\d+/g, function(fullMatch, originalSelector) {
    return originalSelector;
  });
};
