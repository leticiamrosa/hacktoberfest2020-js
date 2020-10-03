export const customSetTimeout = () => (
  setTimeout(() => {
    console.log('Hello, im a module export =)')
  }, 3000)
);

export default customSetTimeout;