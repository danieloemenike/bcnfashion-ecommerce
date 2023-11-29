import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
      <footer className = "w-full  bg-background absolute bottom-0 left-0">
          <div className="mx-auto py-10">
              <p className="text-center text-xs">
                  &copy; 2023 Built With ❤ By Butik Commerce. All Rights Reserved
            </p>
          </div>

    </footer>
  )
}

export default Footer