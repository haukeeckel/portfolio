const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hauke-eckel/',
    icon: '/images/social/linkedin-original.svg',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/hauke_eckel',
    icon: '/images/social/twitter-original.svg',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/haukeeckel',
    icon: '/images/social/github-original.svg',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel='rel="noopener noreferrer'
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <img className="h-6 w-6" alt={item.name} src={item.icon} />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">&copy; 2022 Hauke Eckel</p>
        </div>
      </div>
    </footer>
  );
}
