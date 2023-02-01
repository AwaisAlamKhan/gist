function debounce(callback, wait = 400) {
  let timeout;

  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
}
const DateFormat = (value) => {
  if (value == null) {
    return null;
  } else {
    const d = new Date(value);
    return new Intl.DateTimeFormat("fr-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(d);
  }
};

export { debounce, DateFormat };
