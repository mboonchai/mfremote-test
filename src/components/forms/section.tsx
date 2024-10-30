
import clsx from "clsx";

export default ({ title, subtitle, children, className, isEdit }: IThemeSectionGeneric) => {
    return (
        <div className="flex-1">
            <div className={clsx("divide-y divide-gray-200 md:rounded-lg bg-white shadow", className)}>
                <div className="px-4 py-5 sm:px-6">
                    <h1 className="text-lg font-semibold text-gray-900 text-center">{title || "Section Title"}</h1>
                    <p className="mt-1 text-sm text-gray-700">{subtitle || "Section Description"}</p>
                </div>
                {isEdit ? (
                    <>{children}</>
                ) : (
                    <div className="px-4 py-5 sm:p-6 space-y-6">{children}</div>
                )}
            </div>
        </div>
    )
}