import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Menu, X, Globe, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  
  // Mock user state - replace with real auth context
  const isAuthenticated = false;
  const userType = 'employer'; // or 'talent'

  // Check current route to determine navigation items
  const isTalentProfilePage = location.pathname.startsWith('/talent/');
  const isEmployerDashboard = location.pathname === '/employer-dashboard';

  const getNavLinks = () => {
    if (isEmployerDashboard) {
      return [
        { key: 'findTalent', href: '/talent-search', label: t('nav.findTalent') },
        { key: 'contact', href: '/contact', label: t('nav.contact') },
      ];
    }
    
    return [
      { key: 'home', href: '/', label: t('nav.home') },
      { key: 'findTalent', href: '/talent-search', label: t('nav.findTalent') },
      { key: 'forCompanies', href: '/for-companies', label: t('nav.forCompanies') },
      { key: 'forTalent', href: '/for-talent', label: t('nav.forTalent') },
      { key: 'contact', href: '/contact', label: t('nav.contact') },
    ];
  };

  const navLinks = getNavLinks();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              src="/lovable-uploads/22313fbf-15da-4ba3-a73c-166a88ce45f1.png"
              alt="Nebula Logo"
              className="h-10 w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActiveRoute(link.href)
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary'
                } ${link.key === 'findTalent' ? 'animate-pulse text-primary shadow-glow' : ''}`}
              >
                {link.label}
                {isActiveRoute(link.href) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  {i18n.language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="cosmic-card">
                <DropdownMenuItem onClick={() => changeLanguage('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ka')}>
                  ქართული
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ru')}>
                  Русский
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Auth Actions */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <User className="w-4 h-4" />
                    {t('nav.profile')}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="cosmic-card">
                  <DropdownMenuItem asChild>
                    <Link to={`/${userType}-dashboard`} className="gap-2">
                      <User className="w-4 h-4" />
                      {t('nav.dashboard')}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="gap-2">
                      <User className="w-4 h-4" />
                      {t('nav.profile')}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="gap-2 text-destructive">
                    <LogOut className="w-4 h-4" />
                    {t('nav.logout')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // Show login button for talent profile pages
              isTalentProfilePage && (
                <Button asChild>
                  <Link to="/login">Login</Link>
                </Button>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActiveRoute(link.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/80 hover:text-primary hover:bg-accent/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Auth Actions */}
              <div className="pt-4 border-t border-border">
                {isAuthenticated ? (
                  <>
                    <Link
                      to={`/${userType}-dashboard`}
                      className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {t('nav.dashboard')}
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {t('nav.profile')}
                    </Link>
                    <button className="block w-full text-left px-3 py-2 text-base font-medium text-destructive">
                      {t('nav.logout')}
                    </button>
                  </>
                ) : (
                  // Show login button for talent profile pages in mobile menu
                  isTalentProfilePage && (
                    <Link
                      to="/login"
                      className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                  )
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;