import { useEffect } from 'react';

const usePageTitle = (page) => useEffect(() => { document.title = `NEXTDEV | ${page}`; }, []);

export { usePageTitle };