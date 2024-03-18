import { GithubIcon, LinkedinIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex justify-between items-center gap-4 bg-gray-300 dark:bg-slate-900 overscroll-contain px-10 md:px-48 py-6">
      <label className="text-sm font">@elbertlucas 2024</label>
      <div>
        <ul className="flex text-sm gap-4">
          <li>
            <a className="w-full" href="https://www.linkedin.com/in/elbertlucas" target="_blank">
              <LinkedinIcon
                className="p-1 w-[2rem] h-[2rem] rounded-md hover:bg-primary hover:text-secondary cursor-pointer" />
            </a>
          </li>
          <li>
            <a className="w-full" href="https://github.com/elbertlucas" target="_blank">
              <GithubIcon
                className="p-1 w-[2rem] h-[2rem] rounded-md hover:bg-primary hover:text-secondary cursor-pointer" />
            </a>
          </li>
        </ul>
      </div>
    </footer >
  )
}
