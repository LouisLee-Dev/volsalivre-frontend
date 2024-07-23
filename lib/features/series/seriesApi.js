const fetchSeries = async (level) => {
    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/series/all`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      return data;
    } catch (err) {
      console.error('Error: Level loading error!!!');
    }
  };

  export {fetchSeries}