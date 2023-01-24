function NewTodayIcon(props: any) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      class='scheduler-suggestions-item-icon--later-this-week'
      aria-hidden='true'
      focusable='false'
      {...props}
    >
      <path
        d='M6 4.5h12c.8 0 1.5.7 1.5 1.5v2.5h-15V6c0-.8.7-1.5 1.5-1.5z'
        opacity='0.1'
      ></path>
      <path
        fill='currentColor'
        d='M18 4a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h12zm0 1H6a1 1 0 00-1 1v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1zm-2 10a1 1 0 110 2 1 1 0 010-2zm1-7a.5.5 0 010 1H7a.5.5 0 010-1h10z'
      ></path>
    </svg>
  );
}

export default NewTodayIcon;
