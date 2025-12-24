export default function GTA6Layout({ children }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          body,
          html,
          main,
          section {
            background-color: transparent !important;
            background: transparent !important;
          }
        `
      }} />
      <div style={{
        backgroundColor: '#3b0764',
        background: 'linear-gradient(to bottom right, #3b0764, #500724, #431407)',
        minHeight: '100vh',
        width: '100%'
      }}>
        {children}
      </div>
    </>
  );
}
