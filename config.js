import hbs from 'hbs';

const configuration = async () => {
  hbs.registerHelper('increment', function(value) {
    return value + 1;
  });

  hbs.registerHelper('inc', function(value) {
    return parseInt(value) + 1;
  });

  hbs.registerHelper('eq', function(a, b) {
    return a === b;
  });

  hbs.registerHelper('ifCond', function(v1, operator, v2, options) {
    switch (operator) {
      case '<':
        return (v1 < v2) ? options.fn(this) : options.inverse(this);
      default:
        return options.inverse(this);
    }
  });

  hbs.registerHelper('ifLastFour', function(index, total, options) {
    if (index >= total - 4) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  hbs.registerHelper('ifEquals', function(a, b, options) {
    if (a === b) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  hbs.registerHelper('ifRange', function (index, min, max, options) {
  if (index >= min && index <= max) {
    return options.fn(this);
  }
  return options.inverse(this);
});
}

export default configuration; 
