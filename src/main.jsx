import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error) {
    console.error('XYZ Fitness render error:', error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <main style={{minHeight:'100vh',background:'#090909',color:'#fff',fontFamily:'Arial,sans-serif',padding:'48px 24px'}}>
          <div style={{maxWidth:720,margin:'10vh auto'}}>
            <p style={{color:'#ff5a1f',letterSpacing:3,fontWeight:700}}>XYZ FITNESS</p>
            <h1 style={{fontSize:'clamp(32px,6vw,56px)'}}>Something went wrong while loading the website.</h1>
            <p style={{color:'#bbb',lineHeight:1.7}}>The app caught a rendering error instead of showing a blank page. Open the browser console (F12) and check the error below.</p>
            <pre style={{whiteSpace:'pre-wrap',background:'#191919',padding:18,border:'1px solid #444',color:'#ffb199',overflowWrap:'anywhere'}}>{String(this.state.error)}</pre>
            <button onClick={() => window.location.reload()} style={{background:'#ff5a1f',border:0,padding:'14px 20px',fontWeight:700,cursor:'pointer'}}>RELOAD WEBSITE</button>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppErrorBoundary><App /></AppErrorBoundary>
  </React.StrictMode>
);
