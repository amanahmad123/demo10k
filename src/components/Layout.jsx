import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Dumbbell, Sun, Moon, Phone } from 'lucide-react';
import { site } from '../data/site.js';

const links = [['Home','/'],['About','/about'],['Programs','/programs'],['Trainers','/trainers'],['Membership','/membership'],['Gallery','/gallery'],['Contact','/contact']];

function ThemeToggle() {
  const [light, setLight] = useState(() => {
    try { return (localStorage.getItem('xyz-theme') || 'light') === 'light'; }
    catch { return true; }
  });
  useEffect(() => {
    const theme = light ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try { localStorage.setItem('xyz-theme', theme); } catch { /* storage may be disabled */ }
  }, [light]);
  return (
    <button className="theme-toggle" type="button" onClick={() => setLight(value => !value)}
      aria-label={`Switch to ${light ? 'dark' : 'light'} theme`}
      aria-pressed={!light} title={`Switch to ${light ? 'dark' : 'light'} theme`}>
      {light ? <Moon size={16} aria-hidden="true"/> : <Sun size={16} aria-hidden="true"/>}
      <span>{light ? 'DARK' : 'LIGHT'}</span>
    </button>
  );
}

export function Navbar() {
  const [open,setOpen] = useState(false);
  return <>
    <div className="topline">GHAZIABAD, UTTAR PRADESH <span>·</span> YOUR STRONGER CHAPTER STARTS HERE <span>·</span> ENQUIRE TODAY</div>
    <header className="nav">
      <Link to="/" className="brand" onClick={()=>setOpen(false)} aria-label="XYZ Fitness home"><span className="brand-mark"><Dumbbell size={21}/></span><span>XYZ<span className="brand-dot">.</span><small>FITNESS CLUB</small></span></Link>
      <nav className={open?'nav-links show':'nav-links'} aria-label="Main navigation">
        {links.map(([n,p])=><NavLink key={p} to={p} end={p==='/'} onClick={()=>setOpen(false)}>{n}</NavLink>)}
        <a className="nav-phone" href={`tel:${site.phoneLink}`} aria-label={`Call ${site.phone}`}><Phone size={15}/></a>
        <Link className="nav-cta" to="/contact" onClick={()=>setOpen(false)}>JOIN THE CLUB <ArrowUpRight size={16}/></Link>
      </nav>
      <div className="nav-tools"><ThemeToggle/><button className="menu-btn" onClick={()=>setOpen(!open)} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open}>{open?<X/>:<Menu/>}</button></div>
    </header>
  </>;
}

export function Footer(){
  return <footer className="footer"><div className="footer-top">
    <div><Link to="/" className="brand footer-brand"><span className="brand-mark"><Dumbbell size={21}/></span><span>XYZ<span className="brand-dot">.</span><small>FITNESS CLUB</small></span></Link><p>Train with purpose. Move with confidence.<br/>A stronger routine starts with one session.</p></div>
    <div><h4>EXPLORE</h4>{links.slice(1,6).map(([n,p])=><Link key={p} to={p}>{n}</Link>)}</div>
    <div><h4>GET IN TOUCH</h4><a href={`tel:${site.phoneLink}`}>{site.phone}</a><span>{site.address}</span><span>{site.hours}</span><a href={site.mapUrl} target="_blank" rel="noreferrer">Directions in Ghaziabad ↗</a></div>
    <div><h4>START HERE</h4><Link to="/contact">Book an intro visit ↗</Link><Link to="/faq">Frequently asked questions</Link><a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi XYZ Fitness, I would like to enquire about membership.')}`} target="_blank" rel="noreferrer">WhatsApp us ↗</a></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} XYZ FITNESS. ALL RIGHTS RESERVED.</span><div><Link to="/privacy">PRIVACY</Link><Link to="/terms">TERMS</Link></div><span>BUILT FOR PROGRESS · GHAZIABAD</span></div></footer>;
}

export function WhatsApp(){return <a className="whatsapp" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi XYZ Fitness, I would like to know more about membership and a trial visit in Ghaziabad.')}`} target="_blank" rel="noreferrer" aria-label="Enquire with XYZ Fitness on WhatsApp"><span>WA</span><b>ENQUIRE</b></a>;}
