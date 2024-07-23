import { toast } from 'sonner'

export const successToast = ({ title, description }) => {
	toast.success(title, {
		description,
	})
}

export const errorToast = ({ title, description }) => {
	toast.error(title, {
		description,
	})
}
