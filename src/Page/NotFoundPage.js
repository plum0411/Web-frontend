function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  return (
    <main class="grid h-screen place-items-center bg-white dark:bg-stone-900 px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-semibold text-amber-600">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-5xl">Page not found</h1>
        <p class="mt-6 text-base leading-7 text-stone-600 dark:text-stone-400">很抱歉，我們找不到您正要前往的頁面。</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="/" class="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600">
            回首頁
          </a>
          {/* <a href="/" class="text-sm font-semibold text-stone-900">Contact support <span aria-hidden="true">&rarr;</span></a> */}
        </div>
      </div>
    </main>
  );
}

export default App;
