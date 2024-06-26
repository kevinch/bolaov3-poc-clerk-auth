import clsx from "clsx"
import Link from "next/link"

const classesLink = "uppercase py-4"

type Props = {
  bolaoId: string
  active: number
}

function BolaoLinks({ bolaoId, active }: Props) {
  const classesDiv = "flex grow justify-center w-1/4 text-xs"

  return (
    <div className="flex mb-10">
      <div
        className={clsx(classesDiv, {
          "border-b-2": active === 1,
        })}
      >
        <Link className={classesLink} href={`/bolao/${bolaoId}/bet`}>
          bet
        </Link>
      </div>
      <div
        className={clsx(classesDiv, {
          "border-b-2": active === 2,
        })}
      >
        <Link className={classesLink} href={`/bolao/${bolaoId}/standings`}>
          standings
        </Link>
      </div>
      <div
        className={clsx(classesDiv, {
          "border-b-2": active === 3,
        })}
      >
        <Link className={classesLink} href={`/bolao/${bolaoId}/results`}>
          results
        </Link>
      </div>
      <div
        className={clsx(classesDiv, {
          "border-b-2": active === 4,
        })}
      >
        <Link className={classesLink} href={`/bolao/${bolaoId}/lead`}>
          lead
        </Link>
      </div>
    </div>
  )
}

export default BolaoLinks
