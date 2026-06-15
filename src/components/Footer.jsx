/**
 * Footer.jsx - Site-wide footer component.
 * Features a multi-column layout with brand info, quick links,
 * contact details, and a newsletter signup.
 */
import TransitionLink from './TransitionLink';
import { BookOpen, Mail, Phone, MapPin, Heart, ArrowUpRight, Send } from 'lucide-react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  
  .input-wrapper {
    width: 100%;
    height: 45px;
    border-radius: 20px;
    padding: 5px;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .icon {
    width: 30px;
    fill: rgb(255, 255, 255);
    margin-left: 8px;
    transition: all 0.3s;
    flex-shrink: 0;
  }
  
  .input {
    flex: 1;
    min-width: 0;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 15px;
    background-color: transparent;
    color: white;
    font-size: 1em;
  }
  
  .input:-webkit-autofill,
  .input:-webkit-autofill:hover, 
  .input:-webkit-autofill:focus, 
  .input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #ffffff;
  }
  
  .Subscribe-btn {
    height: 100%;
    width: 110px;
    flex-shrink: 0;
    border: none;
    border-radius: 15px;
    color: rgb(0, 0, 0);
    cursor: pointer;
    background: linear-gradient(to right, #f59e0b, #fbbf24);
    font-weight: 600;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.3s;
  }
  
  .arrow {
    position: absolute;
    margin-right: 150px;
    transition: all 0.3s;
    fill: #000;
  }
  
  .input-wrapper:active .icon {
    transform: scale(1.3);
  }
  
  .Subscribe-btn:hover .btn-text {
    opacity: 0;
  }
  
  .Subscribe-btn:hover .arrow {
    margin-right: 0;
    animation: jello-vertical 0.9s both;
    transform-origin: right;
  }

  @keyframes jello-vertical {
    0% { transform: scale3d(1, 1, 1); }
    30% { transform: scale3d(0.75, 1.25, 1); }
    40% { transform: scale3d(1.25, 0.75, 1); }
    50% { transform: scale3d(0.85, 1.15, 1); }
    65% { transform: scale3d(1.05, 0.95, 1); }
    75% { transform: scale3d(0.95, 1.05, 1); }
    100% { transform: scale3d(1, 1, 1); }
  }
  
  .Subscribe-btn:active {
    transform: scale(0.9);
  }
`;

function Footer() {
  return (
    <footer id="site-footer" className="bg-emerald-950 text-white relative overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="grid-pattern w-full h-full" />
      </div>

      {/* Background Fading Text */}
      <div className="absolute top-32 left-0 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0">
        <span
          className="text-[22vw] font-black leading-none text-white opacity-5"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)'
          }}
        >
          IQRA
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Newsletter Banner ---- */}
        <div className="py-12 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-8">
            <div>
              <h3 className="text-xl font-bold">Stay Connected</h3>
              <p className="text-emerald-300 text-sm mt-1">
                Get updates on admissions, events, and school news.
              </p>
            </div>
            <StyledWrapper className="w-full md:w-auto flex-1 max-w-md">
              <div className="input-wrapper">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g data-name="Layer 2">
                    <g data-name="inbox">
                      <rect width={24} height={24} transform="rotate(180 12 12)" opacity={0} />
                      <path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z" />
                    </g>
                  </g>
                </svg>
                <input type="email" name="text" className="input" placeholder="info@gmail.com" />
                <button className="Subscribe-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={10} viewBox="0 0 38 15" className="arrow">
                    <path d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z" /></svg>
                  <span className="btn-text">Subscribe</span>
                </button>
              </div>
            </StyledWrapper>
          </div>
        </div>

        {/* ---- Footer Columns ---- */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/ivsl3-logo.png"
                alt="Iqra Virtual School Logo"
                className="h-12 w-auto"
              />
              <div>
                <span className="text-lg font-bold">IQRA</span>
                <span className="block text-[10px] font-medium tracking-widest text-gold-400 uppercase -mt-1">
                  Virtual School
                </span>
              </div>
            </div>
            <p className="text-emerald-300/80 text-sm leading-relaxed">
              Nurturing minds and building character through a holistic Islamic education
              that prepares students for academic excellence and spiritual growth.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'Faculty', path: '/faculty' },
                { name: 'Gallery', path: '/gallery' },
              ].map((link) => (
                <li key={link.name}>
                  <TransitionLink
                    to={link.path}
                    className="text-emerald-300/70 hover:text-white text-sm flex items-center gap-2 group transition-colors duration-200"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-5">
              Programs
            </h4>
            <ul className="space-y-3">
              {[
                'Elementary Program',
                'Middle School',
                'High School',
                'Quran Studies',
                'Arabic Language',
              ].map((item) => (
                <li key={item}>
                  <span className="text-emerald-300/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-emerald-300/70 text-sm">info@iqravirtualschool.net</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-emerald-300/70 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-emerald-300/70 text-sm">
                  123 Knowledge Avenue,<br />Education City, EC 45678
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ---- Social Buttons ---- */}
        <SocialWrapper>
          <ul className="wrapper">
            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              <svg viewBox="0 0 320 512" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </li>
            <li className="icon twitter">
              <span className="tooltip">Twitter</span>
              <svg height="1.8em" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="twitter">
                <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
              </svg>
            </li>
            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </li>
          </ul>
        </SocialWrapper>

        {/* ---- Bottom Bar ---- */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-emerald-400/60 text-xs">
            © {new Date().getFullYear()} Iqra Virtual School. All rights reserved.
          </p>
          <p className="text-emerald-400/60 text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400" /> for education
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const SocialWrapper = styled.div`
  .wrapper {
    display: inline-flex;
    list-style: none;
    height: 120px;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    font-family: "Poppins", sans-serif;
    justify-content: flex-end;
  }

  .wrapper .icon {
    position: relative;
    background: #fff;
    border-radius: 50%;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    color: #1e293b;
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .wrapper .facebook:hover,
  .wrapper .facebook:hover .tooltip,
  .wrapper .facebook:hover .tooltip::before {
    background: #1877f2;
    color: #fff;
  }

  .wrapper .twitter:hover,
  .wrapper .twitter:hover .tooltip,
  .wrapper .twitter:hover .tooltip::before {
    background: #1da1f2;
    color: #fff;
  }

  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #e4405f;
    color: #fff;
  }
`;
