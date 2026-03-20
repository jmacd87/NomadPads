'use client'

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-10 h-10 border-4 border-border border-t-clay rounded-full animate-spin" aria-label="Loading" />
        </div>
    )
}

export default LoadingPage