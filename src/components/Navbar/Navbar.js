function Navbar() {
    return (
        <nav class="h-30 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#" class="flex">
                    <svg width="100%" height="100%" viewBox="0 0 312 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.4062 51C25.6562 60 20.2812 64.5104 11.2812 64.5312C3.76042 64.5312 0 61.375 0 55.0625C0 53.8333 0.145833 52.4792 0.4375 51L7.71875 13.5C9.46875 4.5 14.8333 0 23.8125 0C31.3542 0 35.125 3.15625 35.125 9.46875C35.125 10.6979 34.9792 12.0417 34.6875 13.5L32.9688 22.375H22.5625L24.2812 13.5C24.7396 11.1667 23.9479 9.98958 21.9062 9.96875H21.8438C19.8229 9.96875 18.5833 11.1458 18.125 13.5L10.8438 51C10.3854 53.3542 11.1771 54.5312 13.2188 54.5312C15.2812 54.5312 16.5417 53.3542 17 51L18.7188 42.125H29.125L27.4062 51Z" fill="white"></path>
                        <path d="M57.7687 51C56.0187 60 50.6437 64.5104 41.6437 64.5312C34.1229 64.5312 30.3625 61.375 30.3625 55.0625C30.3625 53.8333 30.5083 52.4792 30.8 51L38.0812 13.5C39.8312 4.5 45.1958 0 54.175 0C61.7167 0 65.4876 3.15625 65.4876 9.46875C65.4876 10.6979 65.3418 12.0417 65.0501 13.5L57.7687 51ZM54.6437 13.5C55.1021 11.1667 54.3104 9.98958 52.2687 9.96875H52.2062C50.1854 9.96875 48.9458 11.1458 48.4875 13.5L41.2062 51C40.7479 53.3542 41.5396 54.5312 43.5812 54.5312C45.6437 54.5312 46.9042 53.3542 47.3625 51L54.6437 13.5Z" fill="white"></path>
                        <path d="M71.8187 0.96875H86.225C93.1625 0.989583 96.6312 4.08333 96.6312 10.25C96.6312 11.5208 96.475 12.9375 96.1625 14.5L89.2562 50.0312C87.5062 59.0104 82.2667 63.5104 73.5375 63.5312H59.6625L71.8187 0.96875ZM80.2875 10.9375L72.0062 53.5625H75.1C77.1417 53.5625 78.3917 52.3854 78.85 50.0312L85.7562 14.5C86.2146 12.125 85.4229 10.9375 83.3812 10.9375H80.2875Z" fill="white"></path>
                        <path d="M103.119 0.96875H127.619L125.681 10.9375H111.588L108.431 27.25H120.556L118.588 37.25H106.463L103.306 53.5625H117.4L115.463 63.5312H90.9625L103.119 0.96875Z" fill="white"></path>
                        <path d="M130.981 0.96875H144.637C151.575 0.989583 155.044 4.08333 155.044 10.25C155.044 11.5208 154.887 12.9375 154.575 14.5L152.794 23.7188C151.69 29.3854 148.7 33.0521 143.825 34.7188L148.262 63.5312H136.919L135.012 36.625H134.45L129.231 63.5312H118.825L130.981 0.96875ZM139.45 10.9375L136.294 27.25H137.544C138.669 27.25 139.408 27.1875 139.762 27.0625C141.179 26.5417 142.054 25.4271 142.387 23.7188L144.169 14.5C144.627 12.125 143.835 10.9375 141.794 10.9375H139.45Z" fill="white"></path>
                        <path d="M162.219 0.96875H172.625L167.531 27.25H173.688L178.781 0.96875H189.188L177.031 63.5312H166.625L171.719 37.25H165.562L160.469 63.5312H150.062L162.219 0.96875Z" fill="white"></path>
                        <path d="M210.769 51C209.019 60 203.644 64.5104 194.644 64.5312C187.123 64.5312 183.363 61.375 183.363 55.0625C183.363 53.8333 183.508 52.4792 183.8 51L191.081 13.5C192.831 4.5 198.196 0 207.175 0C214.717 0 218.488 3.15625 218.488 9.46875C218.488 10.6979 218.342 12.0417 218.05 13.5L210.769 51ZM207.644 13.5C208.102 11.1667 207.31 9.98958 205.269 9.96875H205.206C203.185 9.96875 201.946 11.1458 201.488 13.5L194.206 51C193.748 53.3542 194.54 54.5312 196.581 54.5312C198.644 54.5312 199.904 53.3542 200.363 51L207.644 13.5Z" fill="white"></path>
                        <path d="M241.756 51C240.006 60 234.631 64.5104 225.631 64.5312C218.11 64.5312 214.35 61.375 214.35 55.0625C214.35 53.8333 214.496 52.4792 214.788 51L224.506 0.96875H234.913L225.194 51C224.735 53.3542 225.527 54.5312 227.569 54.5312C229.631 54.5312 230.892 53.3542 231.35 51L241.069 0.96875H251.475L241.756 51Z" fill="white"></path>
                        <path d="M253.056 13.5C254.806 4.5 260.171 0 269.15 0C276.692 0 280.462 3.15625 280.462 9.46875C280.462 10.6979 280.317 12.0417 280.025 13.5L278.306 22.375H267.9L269.619 13.5C270.077 11.1667 269.285 9.98958 267.244 9.96875H267.181C265.16 9.96875 263.921 11.1458 263.462 13.5L262.4 19.0625C261.9 21.6042 263.942 24.7917 268.525 28.625C273.442 32.6875 275.348 37.5625 274.244 43.25L272.744 51C270.994 60.0208 265.629 64.5312 256.65 64.5312C249.108 64.5104 245.337 61.3438 245.337 55.0312C245.337 53.8021 245.483 52.4583 245.775 51L247.494 42.125H257.9L256.181 51C255.723 53.3542 256.525 54.5312 258.587 54.5312C260.629 54.5312 261.879 53.3542 262.337 51L263.712 44C264.233 41.2292 262.202 37.9271 257.619 34.0938C252.702 30.0312 250.806 25.0833 251.931 19.25L253.056 13.5Z" fill="white"></path>
                        <path d="M286.794 0.96875H311.294L309.356 10.9375H295.263L292.106 27.25H304.231L302.263 37.25H290.138L286.981 53.5625H301.075L299.138 63.5312H274.638L286.794 0.96875Z" fill="white"></path>
                    </svg>
                </a>
                
                <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar