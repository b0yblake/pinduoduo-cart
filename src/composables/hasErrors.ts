const hasErrors = (fieldsError: string) => {
	return Object.keys(fieldsError).some((field: any) => fieldsError[field]);
};

export default hasErrors;
