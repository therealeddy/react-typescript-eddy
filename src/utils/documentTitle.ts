export default function documentTitle(name: string) {
  const defaultName = process.env.REACT_APP_NAME_SEO || 'React TS Eddy 🚀 ';
  document.title = `${defaultName}| ${name}`;

  return true;
}
