import { notifications } from '@mantine/notifications';

export const configToast = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
};

export const showSuccessNotification = (title, message, configToast) => {
  return notifications.show({
    title: title,
    message: message,
    ...configToast
  });
};

export const showErrorNotification = (title, message, configToast) => {
  return notifications.show({
    color: 'red',
    title: title,
    message: message,
    ...configToast
  })
};

export const showDeleteNotification = (title, message, configToast) => {
  return notifications.show({
    color: 'red',
    title: title,
    message: message,
    ...configToast
  });
};

export const getChangedValues = (values, initialValues) => {
  return Object
    .entries(values)
    .reduce((acc, [key, value]) => {
      const hasChanged = initialValues[key] !== value

      if (hasChanged) {
        acc[key] = value
      }

      return acc
    }, {})
}

export const combineClasses = (...classes) => {
  return classes.join(" ");
};

export const getToken = () => {
  return localStorage?.getItem("token")
}