import { IconBrandGithub } from "@tabler/icons-react"
import { IconBrandLinkedin } from "@tabler/icons-react"
import HeaderBtn from "./header-btn"

export default function Footer() {
  return (
    <footer class="bg-woodsmoke-950 border-2 border-solid border-t-woodsmoke-600 border-transparent shadow py-4 dark:bg-gray-800 bottom-0 w-auto">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-woodsmoke-50 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://www.linkedin.com/in/rafa-canosa-vallejo-6328a5194/"
            class="hover:underline"
          >
            Rafa Canosa™
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-woodsmoke-300 dark:text-gray-400 sm:mt-0">
          <HeaderBtn
            name={"GitHub"}
            destino={"https://github.com/Rafacv23/dashboard-nextjs"}
            icon={<IconBrandGithub />}
          />
          <HeaderBtn
            name={"Linkedin"}
            destino={
              "https://www.linkedin.com/in/rafa-canosa-vallejo-6328a5194/"
            }
            icon={<IconBrandLinkedin />}
          />
        </ul>
      </div>
    </footer>
  )
}
